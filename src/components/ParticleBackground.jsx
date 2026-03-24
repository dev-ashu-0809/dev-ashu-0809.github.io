import { useEffect, useRef } from 'react'

const SKILLS = [
  '.NET Core', 'C#', 'Angular', 'TypeScript', 'JavaScript',
  'ASP.NET', 'MVC 5', 'Web API', 'SignalR', 'Microservices',
  'Terraform', 'Docker', 'AWS', 'GCP', 'Kafka',
  'PostgreSQL', 'SQL Server', 'Redis', 'DynamoDB', 'Oracle',
  'Cloud SQL', 'Pub/Sub', 'BigQuery', 'IAM', 'ECS Fargate',
  'HTML5', 'CSS3', 'Bootstrap', 'jQuery',
  'Playwright', 'SonarQube', 'New Relic', 'Postman',
  'Git', 'Jira', 'Bitbucket', 'CI/CD',
  'Claude AI', 'Copilot', 'ChatGPT', 'AI Agents',
  'HL7', 'EHR', 'HIPAA', 'REST API',
  'PowerShell', 'Entity Framework', 'Okta', 'UiPath',
]

const COLORS = [
  [96, 165, 250],   // blue
  [34, 211, 238],   // cyan
  [129, 140, 248],  // indigo
  [56, 189, 248],   // sky
  [167, 139, 250],  // violet
]

const CONNECTION_DISTANCE = 180
const MOUSE_RADIUS = 200

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let items = []
    let mouse = { x: null, y: null }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const COUNT = Math.min(30, Math.floor(window.innerWidth / 50))

    class FloatingSkill {
      constructor(initial = true) {
        this.text = SKILLS[Math.floor(Math.random() * SKILLS.length)]
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.fontSize = Math.random() * 4 + 13
        this.x = Math.random() * canvas.width
        this.y = initial
          ? Math.random() * canvas.height
          : canvas.height + 30
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = -(Math.random() * 0.25 + 0.1)
        this.baseOpacity = Math.random() * 0.12 + 0.06
        this.opacity = this.baseOpacity
        this.phase = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.phase += 0.008

        this.opacity = this.baseOpacity + Math.sin(this.phase) * 0.03

        if (mouse.x !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS) {
            const t = 1 - dist / MOUSE_RADIUS
            this.opacity = Math.min(0.55, this.opacity + t * 0.4)
            this.vx += dx / dist * 0.008
            this.vy += dy / dist * 0.008
          }
        }

        this.vx *= 0.998
        this.vy *= 0.998

        if (this.y < -40 || this.x < -100 || this.x > canvas.width + 100) {
          Object.assign(this, new FloatingSkill(false))
          this.y = canvas.height + 30
        }
      }

      draw() {
        const [r, g, b] = this.color

        ctx.save()
        ctx.font = `500 ${this.fontSize}px 'Fira Code', 'Consolas', monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        if (this.opacity > 0.2) {
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.6})`
          ctx.shadowBlur = 20
        }

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
        ctx.fillText(this.text, this.x, this.y)
        ctx.restore()
      }
    }

    for (let i = 0; i < COUNT; i++) {
      items.push(new FloatingSkill(true))
    }

    const drawConnections = () => {
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          const a = items[i]
          const b = items[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const t = 1 - dist / CONNECTION_DISTANCE

            // Use average color of the two connected skills
            const r = Math.round((a.color[0] + b.color[0]) / 2)
            const g = Math.round((a.color[1] + b.color[1]) / 2)
            const bl = Math.round((a.color[2] + b.color[2]) / 2)

            // Base line opacity is very faint, brighter near mouse
            let lineOpacity = t * 0.07

            if (mouse.x !== null) {
              const midX = (a.x + b.x) / 2
              const midY = (a.y + b.y) / 2
              const mouseDist = Math.sqrt(
                (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2
              )
              if (mouseDist < MOUSE_RADIUS) {
                const mouseT = 1 - mouseDist / MOUSE_RADIUS
                lineOpacity = Math.min(0.3, lineOpacity + mouseT * 0.2)
              }
            }

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()

            // Small dot at connection midpoint for network node feel
            if (lineOpacity > 0.1) {
              const midX = (a.x + b.x) / 2
              const midY = (a.y + b.y) / 2
              ctx.beginPath()
              ctx.arc(midX, midY, 1.5, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${lineOpacity * 0.8})`
              ctx.fill()
            }
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawConnections()
      items.forEach(s => {
        s.update()
        s.draw()
      })
      animationId = requestAnimationFrame(animate)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = null; mouse.y = null }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  )
}

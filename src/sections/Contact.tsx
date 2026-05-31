'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactData = z.infer<typeof contactSchema>

const contactInfo = [
  {
    label: 'Email',
    value: 'faruqsuzay@gmail.com',
    href: 'mailto:faruqsuzay@gmail.com',
  },
  {
    label: 'Phone',
    value: '+234 906 134 5507',
    href: 'tel:+2349061345507',
  },
  {
    label: 'GitHub',
    value: 'github.com/IbnAbubakri',
    href: 'https://github.com/IbnAbubakri',
  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/qr/BSDWHYAVN7HBD1',
  },
]

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactData) {
    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send')
      toast.success('Message sent successfully!')
      reset()
    } catch {
      toast.error('Failed to send message. Please try again or email directly.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface-50 dark:bg-surface-900 relative section-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-amber-500 uppercase tracking-[0.2em] mb-3 font-mono">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaboration, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register('name')}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  {...register('message')}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                variants={staggerItem}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                  <span className="block w-5 h-5 rounded-full bg-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-card-foreground truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

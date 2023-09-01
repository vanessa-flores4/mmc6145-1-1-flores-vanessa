import {vi} from 'vitest'
import App from '../App'
import {renderAtURL} from './setup'

describe('app', () => {
  describe('header component', () => {
    it('should be default export of ../components/header and be a function', async () => {
      const {default: Header} = await import('../components/header')
      expect(typeof Header).toBe('function')
    })
    it('should contain a <header> tag', async () => {
      const {default: Header} = await import('../components/header')
      expect(Header).toBeDefined()
      const {container} = renderAtURL(<Header />, "/")
      expect(container.querySelector('header')).not.toBeNull()
    })
    for (const location of ["/", "/about", "/contact"]) {
      it(`should be rendered on the ${location} route`, async () => {
        const obj = await import('../components/header')
        vi.spyOn(obj, 'default')
        expect(typeof obj.default).toBe('function')
        renderAtURL(<App />, location)
        expect(obj.default).toHaveBeenCalledTimes(1)
        obj.default.mockRestore()
      })
      for (const link of ["/", "/about", "/contact"]) {
        it(`should render link to ${link} on ${location} page`, () => {
          const {container} = renderAtURL(<App />, location)
          expect(container.querySelector(`header a[href="${link}"]`)).toBeTruthy()
        })
      }
    }
  })
  describe('homepage component', () => {
    it('should be default export of ../pages/home and be a function', async () => {
      const {default: Home} = await import('../pages/home')
      expect(typeof Home).toBe('function')
    })
    it('should be rendered on the "/" route', async () => {
      const obj = await import('../pages/home')
      vi.spyOn(obj, 'default')
      expect(typeof obj.default).toBe('function')
      renderAtURL(<App />, "/")
      expect(obj.default).toHaveBeenCalledTimes(1)
      obj.default.mockRestore()
    })
  })
  describe('about page component', () => {
    it('should be default export of ../pages/about and be a function', async () => {
      const {default: About} = await import('../pages/about')
      expect(typeof About).toBe('function')
    })
    it('should be rendered on the "/about" route', async () => {
      const obj = await import('../pages/about')
      vi.spyOn(obj, 'default')
      expect(typeof obj.default).toBe('function')
      renderAtURL(<App />, "/about")
      expect(obj.default).toHaveBeenCalledTimes(1)
      obj.default.mockRestore()
    })
  })
  describe('contact page component', () => {
    it('should be default export of ../pages/contact and be a function', async () => {
      const {default: Contact} = await import('../pages/contact')
      expect(typeof Contact).toBe('function')
    })
    it('should be rendered on the "/contact" route', async () => {
      const obj = await import('../pages/contact')
      vi.spyOn(obj, 'default')
      expect(typeof obj.default).toBe('function')
      renderAtURL(<App />, "/contact")
      expect(obj.default).toHaveBeenCalledTimes(1)
      obj.default.mockRestore()
    })
    for (const platform of ["linkedin", "github"]) {
      it(`should contain link to ${platform}`, async () => {
        const {container} = renderAtURL(<App />, "/contact")
        const links = container.querySelectorAll('a')
        const platformLink = Array.from(links).find(tag => tag.href.includes(platform))
        expect(platformLink).toBeDefined()
      })
    }
  })
  describe('project component', () => {
    it('should be default export of ../components/project and be a function', async () => {
      const {default: Project} = await import('../components/project')
      expect(typeof Project).toBe('function')
    })
    it('should be rendered at least twice on the "/" route', async () => {
      const obj = await import('../components/project')
      vi.spyOn(obj, 'default')
      expect(typeof obj.default).toBe('function')
      renderAtURL(<App />, "/")
      expect(obj.default.calls.length >= 2).toBe(true)
      obj.default.mockRestore()
    })
  })
})
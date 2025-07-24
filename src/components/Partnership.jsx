import React from 'react'

const Partnership = () => {
  return (
    <section className="bg-primary-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">We love partnering with</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-600 rounded-lg px-6 py-4">
              <span className="text-gray-300">Montessori & Waldorf Educators</span>
            </div>
            <div className="border border-gray-600 rounded-lg px-6 py-4">
              <span className="text-gray-300">Mindfulness and Yoga Instructors</span>
            </div>
            <div className="border border-gray-600 rounded-lg px-6 py-4">
              <span className="text-gray-300">Gift Shops and Bookstores</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="border border-gray-600 rounded-lg px-6 py-4">
              <span className="text-gray-300">Homeschool Groups and Cultural Educators</span>
            </div>
            <div className="border border-gray-600 rounded-lg px-6 py-4">
              <span className="text-gray-300">Nonprofits and conscious parenting organizations</span>
            </div>
          </div>

          <p className="text-orange-400 text-sm">
            Let's work together to inspire the next generation with stories, values, and joyful learning.
          </p>
        </div>
      </section>
  )
}

export default Partnership
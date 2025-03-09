
// PERSONA SECTION
<section>
          <h2 className="text-2xl font-semibold mb-4">Patient Personas</h2>
          <p className="text-primary/70 mb-6">
            I developed three key patient personas to guide the design process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-primary/10 rounded-xl p-5">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/79.jpg" 
                  alt="Eleanor profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">Eleanor, 72</h3>
              <p className="text-sm text-primary/50 mb-3">Retired Teacher</p>
              <p className="text-primary/70 text-sm">
                "I want to manage my healthcare independently, but I get frustrated when technology doesn't work as expected."
              </p>
            </div>
            <div className="border border-primary/10 rounded-xl p-5">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/men/42.jpg" 
                  alt="Marcus profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">Marcus, 38</h3>
              <p className="text-sm text-primary/50 mb-3">IT Professional with Vision Impairment</p>
              <p className="text-primary/70 text-sm">
                "I need a portal that works well with my screen reader so I can manage my family's healthcare needs."
              </p>
            </div>
            <div className="border border-primary/10 rounded-xl p-5">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/33.jpg" 
                  alt="Sophia profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">Sophia, 29</h3>
              <p className="text-sm text-primary/50 mb-3">Busy Parent</p>
              <p className="text-primary/70 text-sm">
                "I need to quickly schedule appointments and get information about my children's health on the go."
              </p>
            </div>
          </div>
        </section>

// BLOCK QUOTE
<div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The new patient portal has been transformative for our practice. Our staff spends less time on the phone and more time with patients, while patients feel more empowered in managing their health."
              <footer className="mt-2 font-medium text-primary not-italic">— Dr. Sarah Chen, Medical Director</footer>
            </blockquote>
          </div>

// GRAY CARDS WITH ICONS
 <div className="flex items-start p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Keyboard Navigation</p>
                <p className="text-primary/70 text-sm">Full functionality without requiring mouse input</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Color Contrast Verification</p>
                <p className="text-primary/70 text-sm">All text meets AAA contrast requirements</p>
              </div>
            </div>

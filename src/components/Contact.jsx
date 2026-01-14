import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noreferrer"
        className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all group"
    >
        <div className="p-3 bg-blue-500/20 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Icon size={24} />
        </div>
        <div className="text-left">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <p className="text-white font-medium break-all">{value}</p>
        </div>
    </a>
)

const Contact = () => {
    return (
        <section id="contact" className="py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
                <p className="text-gray-400 mb-12">
                    I'm currently available for new opportunities. 
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-left">
                    <ContactItem 
                        icon={Phone} 
                        label="Phone" 
                        value="+358 41 729 7312" 
                        href="tel:+358417297312" 
                    />
                    <ContactItem 
                        icon={Linkedin} 
                        label="LinkedIn" 
                        value="in/haseeb-react-native-dev" 
                        href="https://www.linkedin.com/in/haseeb-react-native-dev/?" 
                    />
                    <ContactItem 
                        icon={Mail} 
                        label="Email (Personal)" 
                        value="haseebr470@gmail.com" 
                        href="mailto:haseebr470@gmail.com" 
                    />
                    <ContactItem 
                        icon={Mail} 
                        label="Email (Student)" 
                        value="haseeb.rehman@student.oulu.fi" 
                        href="mailto:haseeb.rehman@student.oulu.fi" 
                    />
                    <ContactItem 
                        icon={Github} 
                        label="GitHub" 
                        value="github.com/hrhm47" 
                        href="https://github.com/hrhm47" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;

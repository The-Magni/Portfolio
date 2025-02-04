import React from "react";

function ScrollAnimation({ children }) {
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        if (containerRef.current) {
            containerRef.current.querySelectorAll('.hidden').forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="scroll-animation" ref={containerRef}>
            {children}
        </div>
    )
}

export default ScrollAnimation;
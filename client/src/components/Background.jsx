import React, { useEffect } from 'react';
import './Background.css';

const Background = () => {
    useEffect(() => {
        const canvas = document.getElementById('star-canvas');
        const ctx = canvas.getContext('2d');
        const stars = [];

        const createStars = () => {
            for (let i = 0; i < 100; i++) {
                stars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    radius: Math.random() * 1.5,
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            });
        };

        const animateStars = () => {
            stars.forEach(star => {
                star.y += 0.5;
                if (star.y > window.innerHeight) {
                    star.y = 0;
                }
            });
            drawStars();
            requestAnimationFrame(animateStars);
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
        animateStars();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawStars();
        });
    }, []);

    return <canvas id="star-canvas" className="star-canvas"></canvas>;
};

export default Background;
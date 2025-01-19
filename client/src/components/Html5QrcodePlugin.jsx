import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useRef } from 'react';

const Html5QrcodePlugin = (props) => {
    // Create a unique ID for each scanner instance
    const qrcodeRegionId = useRef(`html5qr-code-${Date.now()}`);
    const scannerRef = useRef(null);

    // Creates the configuration object for Html5QrcodeScanner
    const createConfig = (props) => {
        let config = {};
        if (props.fps) {
            config.fps = props.fps;
        }
        if (props.qrbox) {
            config.qrbox = props.qrbox;
        }
        if (props.aspectRatio) {
            config.aspectRatio = props.aspectRatio;
        }
        if (props.disableFlip !== undefined) {
            config.disableFlip = props.disableFlip;
        }
        return config;
    };

    useEffect(() => {
        // Validate required callback
        if (!props.qrCodeSuccessCallback) {
            throw new Error("qrCodeSuccessCallback is required callback.");
        }

        // Configure and initialize scanner
        const config = createConfig(props);
        const verbose = props.verbose === true;

        // Clear any existing instances
        if (scannerRef.current) {
            scannerRef.current.clear().catch(error => {
                console.error("Failed to clear existing scanner.", error);
            });
        }

        // Create and render new scanner
        try {
            scannerRef.current = new Html5QrcodeScanner(
                qrcodeRegionId.current,
                config,
                verbose
            );

            scannerRef.current.render(
                props.qrCodeSuccessCallback,
                props.qrCodeErrorCallback
            );
        } catch (error) {
            console.error("Failed to initialize scanner.", error);
        }

        // Cleanup function
        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear()
                    .then(() => {
                        scannerRef.current = null;
                    })
                    .catch(error => {
                        console.error("Failed to clear scanner.", error);
                    });
            }

            // Clean up the DOM
            const element = document.getElementById(qrcodeRegionId.current);
            if (element) {
                element.innerHTML = "";
            }
        };
    }, [props.qrCodeSuccessCallback, props.qrCodeErrorCallback]); // Add dependencies

    return <div id={qrcodeRegionId.current} />;
};

export default Html5QrcodePlugin;




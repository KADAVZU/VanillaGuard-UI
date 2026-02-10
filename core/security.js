/** 
 * SECURITY CORE - VANILLA COPYGUARD UI
 * Protections: Anti-CMD, Anti-Debug, Anti-Save, Anti-Print & Origin Lock.
 */

(function() {
    // --- SECURITY CONFIGURATION ---
    const allowedHosts = ['localhost', '127.0.0.1']; // Add your production domain here later

    const Shield = {
        // 1. DESTRUCTION FUNCTION (KILL-SWITCH)
        kill: () => {
            // Stop any additional loading immediately
            window.stop(); 
            // Clear HTML completely to leave no traceable data
            document.documentElement.innerHTML = `
                <head><title>SECURITY ERROR</title></head>
                <body style="background:black; color:red; text-align:center; padding-top:20vh; font-family:sans-serif;">
                    <h1 style="font-size:3rem;">⚠️ ACCESS DENIED</h1>
                    <p style="font-size:1.5rem;">Integrity breach detected: Unauthorized environment.</p>
                    <hr style="width:50%; border:1px solid red;">
                    <p>Execution halted for intellectual property protection.</p>
                    <button onclick="location.reload()" style="padding:10px; cursor:pointer;">Retry</button>
                </body>`;
            throw new Error("CopyGuard: Execution Halted.");
        },

        // 2. ACTIVE SURVEILLANCE
        watch: () => {
            // A. ORIGIN VALIDATION (Protocol and Domain)
            const isLocal = window.location.protocol === 'file:';
            const isUnknownHost = !allowedHosts.includes(window.location.hostname);

            if (isLocal || isUnknownHost) {
                Shield.kill();
            }

            // B. BLOCK CONSOLE (Anti-CMD)
            const preventCommand = () => {
                console.clear();
                Shield.kill();
                return "Unauthorized";
            };

            Object.defineProperty(window, 'console', {
                value: Object.freeze({
                    log: preventCommand, error: preventCommand, warn: preventCommand,
                    info: preventCommand, clear: preventCommand, table: preventCommand
                }),
                writable: false, configurable: false
            });

            // C. KEYBOARD LOCK (Save, Print, View Source, DevTools)
            document.addEventListener('keydown', e => {
                const isCmdOrCtrl = e.ctrlKey || e.metaKey;
                const forbidden = [
                    e.key === "F12",
                    isCmdOrCtrl && e.key === "s", // Save
                    isCmdOrCtrl && e.key === "p", // Print
                    isCmdOrCtrl && e.key === "u", // View Source
                    isCmdOrCtrl && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C" || e.key === "S")
                ];

                if (forbidden.some(c => c)) {
                    e.preventDefault();
                    Shield.kill();
                }
            });

            // D. EXTRA LOCKS
            document.addEventListener('contextmenu', e => e.preventDefault()); // Right click
            
            // E. CONSOLE DETECTION (Window size change)
            setInterval(() => {
                const diff = 160;
                if (window.outerWidth - window.innerWidth > diff || window.outerHeight - window.innerHeight > diff) {
                    Shield.kill();
                }
            }, 1000);

            // F. TRAPS AND ANTI-DEBUGGER
            setInterval(() => { debugger; }, 500);
            Object.defineProperty(window, 'app', { get: () => Shield.kill() });
        }
    };

    // Immediate execution
    Shield.watch();
    Object.freeze(Shield);
    window.Shield = Shield; // Protect object in global scope

})();
/**
 * Interactive Toolbar & Whiteboard Suite for ICINTRO (Gold Theme)
 * - Mobile responsive toolbar with horizontal touch-scroll & toggle button (FAB)
 * - Drawings are 100% visible in real-time.
 * - Cursor mode sets pointer-events: none so the page underneath is NEVER locked or blocked!
 * - Independent opacity per tool
 * - Custom color picker
 * - Keyboard text tool
 * - Whiteboard modal
 * - Touch screen drawing support
 */

(function () {
    const style = document.createElement('style');
    style.innerHTML = `
        #annotationCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 9990;
            pointer-events: none;
            cursor: crosshair;
            touch-action: none;
        }

        .tb-toggle-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 10001;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: #2563eb;
            color: #ffffff;
            border: none;
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.45), 0 4px 10px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            user-select: none;
            outline: none;
        }

        .tb-toggle-btn:hover {
            transform: scale(1.08) rotate(5deg);
            background: #1d4ed8;
            box-shadow: 0 14px 28px rgba(37, 99, 235, 0.5);
        }

        .tb-toggle-btn:active {
            transform: scale(0.95);
        }

        .tb-toggle-btn .material-symbols-outlined {
            font-size: 26px;
            transition: transform 0.3s ease;
        }

        .tb-toggle-btn.collapsed .material-symbols-outlined {
            transform: rotate(0deg);
        }

        .tb-floating-bar {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%) translateY(0) scale(1);
            z-index: 9999;
            background: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(200, 200, 200, 0.5);
            border-radius: 9999px;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
            transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s;
            user-select: none;
            opacity: 1;
            visibility: visible;
            max-width: calc(100vw - 32px);
        }

        .tb-floating-bar.tb-collapsed {
            opacity: 0;
            transform: translateX(-50%) translateY(40px) scale(0.85);
            pointer-events: none !important;
            visibility: hidden;
        }

        .tb-btn {
            width: 42px;
            height: 42px;
            min-width: 42px;
            flex-shrink: 0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: transparent;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s;
            position: relative;
        }

        .tb-btn:hover { background: rgba(0, 0, 0, 0.08); transform: translateY(-2px); }

        .tb-btn.active {
            background: #2563eb !important;
            color: #ffffff !important;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
        }

        .tb-btn .material-symbols-outlined { font-size: 22px; }

        .tb-divider {
            width: 1px;
            height: 24px;
            background: rgba(150, 150, 150, 0.3);
            margin: 0 4px;
            flex-shrink: 0;
        }

        .tb-color-picker {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
        }

        .tb-color-dot {
            width: 22px;
            height: 22px;
            flex-shrink: 0;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid transparent;
            transition: transform 0.2s;
        }

        .tb-color-dot:hover { transform: scale(1.2); }
        .tb-color-dot.selected { border-color: #000; transform: scale(1.15); }

        #tbCustomColor {
            width: 26px;
            height: 26px;
            flex-shrink: 0;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            background: transparent;
            padding: 0;
        }

        #tbCustomColor::-webkit-color-swatch-wrapper { padding: 0; }
        #tbCustomColor::-webkit-color-swatch { border: 2px solid rgba(0,0,0,0.2); border-radius: 50%; }

        .tb-opacity-wrap {
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(0,0,0,0.04);
            padding: 4px 10px;
            border-radius: 9999px;
            flex-shrink: 0;
        }

        .tb-opacity-slider {
            width: 70px;
            height: 4px;
            accent-color: #2563eb;
            cursor: pointer;
        }

        .tb-opacity-label {
            font-size: 11px;
            font-weight: 700;
            color: #4b5563;
            min-width: 32px;
        }

        #whiteboardModal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(10px);
            display: none;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }

        .wb-container {
            width: 100%;
            max-width: 1350px;
            height: 88vh;
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .wb-header {
            padding: 16px 24px;
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .wb-canvas-wrap {
            flex: 1;
            position: relative;
            background-color: #ffffff;
            background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px);
            background-size: 24px 24px;
            cursor: crosshair;
            touch-action: none;
        }

        #wbCanvas { width: 100%; height: 100%; }

        .tb-tooltip {
            position: absolute;
            bottom: 54px;
            left: 50%;
            transform: translateX(-50%);
            background: #1e293b;
            color: #fff;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 11px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
        }

        .tb-btn:hover .tb-tooltip { opacity: 1; }

        .canvas-text-input {
            position: absolute;
            background: rgba(255, 255, 255, 0.95);
            border: 2px solid #2563eb;
            color: #0f172a;
            font-family: 'Lexend', 'Manrope', sans-serif;
            font-size: 20px;
            font-weight: 700;
            outline: none;
            padding: 6px 12px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10005;
            min-width: 160px;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
            .tb-toggle-btn {
                bottom: 16px;
                right: 16px;
                width: 48px;
                height: 48px;
            }

            .tb-toggle-btn .material-symbols-outlined {
                font-size: 24px;
            }

            .tb-floating-bar {
                bottom: 76px;
                max-width: calc(100vw - 20px);
                padding: 6px 10px;
                gap: 4px;
                border-radius: 24px;
                overflow-x: auto;
                overflow-y: hidden;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
            }

            .tb-floating-bar::-webkit-scrollbar {
                display: none;
            }

            .tb-btn {
                width: 36px;
                height: 36px;
                min-width: 36px;
            }

            .tb-btn .material-symbols-outlined {
                font-size: 19px;
            }

            .tb-divider {
                height: 20px;
                margin: 0 2px;
            }

            .tb-color-picker {
                gap: 4px;
            }

            .tb-color-dot {
                width: 18px;
                height: 18px;
            }

            #tbCustomColor {
                width: 22px;
                height: 22px;
            }

            .tb-opacity-wrap {
                padding: 2px 6px;
                gap: 4px;
            }

            .tb-opacity-slider {
                width: 46px;
            }

            .tb-opacity-label {
                font-size: 10px;
                min-width: 26px;
            }

            .tb-tooltip {
                display: none;
            }

            #whiteboardModal {
                padding: 8px;
            }

            .wb-container {
                height: 94vh;
                border-radius: 16px;
            }

            .wb-header {
                padding: 12px 16px;
            }

            .wb-header h3 {
                font-size: 15px;
            }
        }
    `;
    document.head.appendChild(style);

    // Create Canvas Layer
    const canvas = document.createElement('canvas');
    canvas.id = 'annotationCanvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Create Toggle Button (FAB)
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'tbToggleBtn';
    toggleBtn.className = 'tb-toggle-btn';
    toggleBtn.title = 'Mostrar / Ocultar Barra de Herramientas';
    toggleBtn.setAttribute('aria-label', 'Mostrar / Ocultar Barra de Herramientas');
    toggleBtn.innerHTML = `<span class="material-symbols-outlined">close</span>`;
    document.body.appendChild(toggleBtn);

    // Create Toolbar Component
    const toolbar = document.createElement('div');
    toolbar.className = 'tb-floating-bar';
    toolbar.id = 'interactiveToolbar';
    toolbar.innerHTML = `
        <button class="tb-btn active" data-tool="cursor" title="Navegar Página (Permite clics en la web)">
            <span class="material-symbols-outlined">near_me</span>
            <span class="tb-tooltip">Navegar Página (Cursor)</span>
        </button>
        <div class="tb-divider"></div>
        <button class="tb-btn" data-tool="pencil" title="Lápiz Libre">
            <span class="material-symbols-outlined">edit</span>
            <span class="tb-tooltip">Lápiz Libre</span>
        </button>
        <button class="tb-btn" data-tool="highlighter" title="Resaltador Transparente">
            <span class="material-symbols-outlined">ink_highlighter</span>
            <span class="tb-tooltip">Resaltador</span>
        </button>
        <button class="tb-btn" data-tool="circle" title="Círculo">
            <span class="material-symbols-outlined">panorama_fish_eye</span>
            <span class="tb-tooltip">Círculo</span>
        </button>
        <button class="tb-btn" data-tool="square" title="Cuadrado">
            <span class="material-symbols-outlined">crop_square</span>
            <span class="tb-tooltip">Cuadrado</span>
        </button>
        <button class="tb-btn" data-tool="line" title="Regla / Línea">
            <span class="material-symbols-outlined">horizontal_rule</span>
            <span class="tb-tooltip">Regla / Línea</span>
        </button>
        <button class="tb-btn" data-tool="text" title="Escribir Texto">
            <span class="material-symbols-outlined">title</span>
            <span class="tb-tooltip">Escribir Texto</span>
        </button>
        <button class="tb-btn" data-tool="eraser" title="Borrador">
            <span class="material-symbols-outlined">ink_eraser</span>
            <span class="tb-tooltip">Borrador</span>
        </button>
        <button class="tb-btn" id="tbClear" title="Limpiar Anotaciones">
            <span class="material-symbols-outlined">delete</span>
            <span class="tb-tooltip">Limpiar Pantalla</span>
        </button>
        <div class="tb-divider"></div>
        <div class="tb-color-picker">
            <div class="tb-color-dot selected" data-color="#ef4444" style="background:#ef4444" title="Rojo"></div>
            <div class="tb-color-dot" data-color="#2563eb" style="background:#2563eb" title="Azul"></div>
            <div class="tb-color-dot" data-color="#22c55e" style="background:#22c55e" title="Verde"></div>
            <div class="tb-color-dot" data-color="#eab308" style="background:#eab308" title="Amarillo"></div>
            <div class="tb-color-dot" data-color="#0f172a" style="background:#0f172a" title="Negro"></div>
            <input type="color" id="tbCustomColor" value="#ef4444" title="Color Personalizado">
        </div>
        <div class="tb-divider"></div>
        <div class="tb-opacity-wrap" title="Transparencia de la herramienta activa">
            <span class="material-symbols-outlined text-slate-500 text-sm">opacity</span>
            <input type="range" id="tbOpacitySlider" class="tb-opacity-slider" min="10" max="100" value="100">
            <span id="tbOpacityValue" class="tb-opacity-label">100%</span>
        </div>
        <div class="tb-divider"></div>
        <button class="tb-btn" id="tbWhiteboardBtn" title="Abrir Pizarra Interactiva" style="background:#2563eb;color:#fff">
            <span class="material-symbols-outlined">dashboard</span>
            <span class="tb-tooltip">Pizarra Interactiva</span>
        </button>
        <div class="tb-divider"></div>
        <button class="tb-btn" id="tbCollapseBtn" title="Ocultar Barra">
            <span class="material-symbols-outlined">expand_more</span>
            <span class="tb-tooltip">Ocultar Barra</span>
        </button>
    `;
    document.body.appendChild(toolbar);

    // Toggle Toolbar Logic
    let isToolbarCollapsed = false;

    function setToolbarState(collapsed) {
        isToolbarCollapsed = collapsed;
        if (isToolbarCollapsed) {
            toolbar.classList.add('tb-collapsed');
            toggleBtn.classList.add('collapsed');
            toggleBtn.innerHTML = `<span class="material-symbols-outlined">tune</span>`;
            toggleBtn.title = "Expandir Barra de Herramientas";
        } else {
            toolbar.classList.remove('tb-collapsed');
            toggleBtn.classList.remove('collapsed');
            toggleBtn.innerHTML = `<span class="material-symbols-outlined">close</span>`;
            toggleBtn.title = "Ocultar Barra de Herramientas";
        }
    }

    toggleBtn.addEventListener('click', () => {
        setToolbarState(!isToolbarCollapsed);
    });

    const collapseBtn = document.getElementById('tbCollapseBtn');
    if (collapseBtn) {
        collapseBtn.addEventListener('click', () => {
            setToolbarState(true);
        });
    }

    // Create Whiteboard Modal
    const wbModal = document.createElement('div');
    wbModal.id = 'whiteboardModal';
    wbModal.innerHTML = `
        <div class="wb-container">
            <div class="wb-header">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-blue-600 text-2xl">draw</span>
                    <h3 class="font-bold text-xl text-slate-800 font-['Manrope']">Pizarra Interactiva — Ejemplos, Tips & Texto</h3>
                </div>
                <div class="flex items-center gap-4">
                    <button id="wbClearBtn" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">delete</span> Limpiar Pizarra
                    </button>
                    <button id="wbCloseBtn" class="p-2 hover:bg-slate-200 text-slate-600 rounded-full transition-colors">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="wb-canvas-wrap" id="wbCanvasWrap">
                <canvas id="wbCanvas"></canvas>
            </div>
        </div>
    `;
    document.body.appendChild(wbModal);

    // Canvas Size Setup
    function initCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        redrawScreen();
    }
    window.addEventListener('resize', initCanvasDimensions);

    // Data Models
    let currentTool = 'cursor';
    let currentColor = '#ef4444';
    let currentLineWidth = 4;
    let isDrawing = false;
    let startX = 0, startY = 0;
    let activePoints = [];

    let screenObjects = [];
    let wbObjects = [];

    // Per Tool Opacity Settings
    const toolOpacities = {
        cursor: 100,
        pencil: 100,
        highlighter: 35,
        circle: 80,
        square: 80,
        line: 100,
        text: 100,
        eraser: 100
    };

    const opacitySlider = document.getElementById('tbOpacitySlider');
    const opacityValueLabel = document.getElementById('tbOpacityValue');

    function updateOpacityUI() {
        const val = toolOpacities[currentTool] || 100;
        opacitySlider.value = val;
        opacityValueLabel.textContent = val + '%';
    }

    // CRITICAL FIX: When Cursor is active, pointer-events = 'none' so user can click page buttons!
    function updatePointerEvents() {
        if (currentTool === 'cursor') {
            canvas.style.pointerEvents = 'none';
        } else {
            canvas.style.pointerEvents = 'auto';
        }
    }

    opacitySlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        toolOpacities[currentTool] = val;
        opacityValueLabel.textContent = val + '%';
        redrawScreen();
        redrawWb();
    });

    // Tool Selector buttons
    const buttons = toolbar.querySelectorAll('.tb-btn[data-tool]');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTool = btn.dataset.tool;
            updatePointerEvents();
            updateOpacityUI();
        });
    });

    // Color Selector
    const colorDots = toolbar.querySelectorAll('.tb-color-dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('selected'));
            dot.classList.add('selected');
            currentColor = dot.dataset.color;
            document.getElementById('tbCustomColor').value = currentColor;
        });
    });

    const customColorInput = document.getElementById('tbCustomColor');
    customColorInput.addEventListener('input', (e) => {
        currentColor = e.target.value;
        colorDots.forEach(d => d.classList.remove('selected'));
    });

    document.getElementById('tbClear').addEventListener('click', () => {
        screenObjects = [];
        redrawScreen();
    });

    // RENDER FUNCTION FOR DRAWINGS & SHAPES
    function drawObject(targetCtx, obj) {
        targetCtx.save();
        targetCtx.beginPath();
        targetCtx.strokeStyle = obj.color || '#ef4444';
        targetCtx.fillStyle = obj.color || '#ef4444';
        targetCtx.lineWidth = obj.lineWidth || 4;
        targetCtx.lineCap = 'round';
        targetCtx.lineJoin = 'round';

        const opacityVal = (obj.opacity !== undefined ? obj.opacity : 100) / 100;
        targetCtx.globalAlpha = opacityVal;

        if (obj.type === 'pencil' || obj.type === 'highlighter') {
            if (obj.type === 'highlighter') {
                targetCtx.lineWidth = 24;
            }
            if (obj.points && obj.points.length > 0) {
                targetCtx.moveTo(obj.points[0].x, obj.points[0].y);
                for (let i = 1; i < obj.points.length; i++) {
                    targetCtx.lineTo(obj.points[i].x, obj.points[i].y);
                }
                targetCtx.stroke();
            }
        } else if (obj.type === 'circle') {
            targetCtx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI);
            targetCtx.stroke();
        } else if (obj.type === 'square') {
            targetCtx.strokeRect(obj.x, obj.y, obj.w, obj.h);
        } else if (obj.type === 'line') {
            targetCtx.moveTo(obj.x1, obj.y1);
            targetCtx.lineTo(obj.x2, obj.y2);
            targetCtx.stroke();
        } else if (obj.type === 'text') {
            targetCtx.font = 'bold 22px "Lexend", "Manrope", sans-serif';
            targetCtx.fillText(obj.text, obj.x, obj.y);
        }

        targetCtx.restore();
    }

    function redrawScreen() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        screenObjects.forEach(obj => drawObject(ctx, obj));
    }

    // SCREEN ANNOTATION CANVAS DRAWING EVENTS
    canvas.addEventListener('mousedown', (e) => {
        if (currentTool === 'cursor') return;

        const mx = e.clientX;
        const my = e.clientY;

        if (currentTool === 'text') {
            createTextInput(mx, my, false);
            return;
        }

        if (currentTool === 'eraser') {
            // Eraser removes object under click
            for (let i = screenObjects.length - 1; i >= 0; i--) {
                const obj = screenObjects[i];
                if (isHit(mx, my, obj, ctx)) {
                    screenObjects.splice(i, 1);
                    break;
                }
            }
            redrawScreen();
            return;
        }

        isDrawing = true;
        startX = mx;
        startY = my;
        activePoints = [{ x: mx, y: my }];
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing || currentTool === 'cursor') return;
        const mx = e.clientX;
        const my = e.clientY;

        if (currentTool === 'pencil' || currentTool === 'highlighter') {
            activePoints.push({ x: mx, y: my });
            redrawScreen();
            // Draw live stroke
            drawObject(ctx, {
                type: currentTool,
                points: activePoints,
                color: currentColor,
                opacity: toolOpacities[currentTool] || 100,
                lineWidth: currentLineWidth
            });
        } else {
            redrawScreen();
            const op = toolOpacities[currentTool] || 100;
            if (currentTool === 'circle') {
                let r = Math.sqrt(Math.pow(mx - startX, 2) + Math.pow(my - startY, 2));
                drawObject(ctx, { type: 'circle', x: startX, y: startY, radius: r, color: currentColor, opacity: op, lineWidth: currentLineWidth });
            } else if (currentTool === 'square') {
                drawObject(ctx, { type: 'square', x: startX, y: startY, w: mx - startX, h: my - startY, color: currentColor, opacity: op, lineWidth: currentLineWidth });
            } else if (currentTool === 'line') {
                drawObject(ctx, { type: 'line', x1: startX, y1: startY, x2: mx, y2: my, color: currentColor, opacity: op, lineWidth: currentLineWidth });
            }
        }
    });

    canvas.addEventListener('mouseup', (e) => {
        if (!isDrawing || currentTool === 'cursor') return;
        isDrawing = false;
        const mx = e.clientX;
        const my = e.clientY;
        const op = toolOpacities[currentTool] || 100;

        if (currentTool === 'pencil' || currentTool === 'highlighter') {
            if (activePoints.length > 0) {
                screenObjects.push({
                    type: currentTool,
                    points: [...activePoints],
                    color: currentColor,
                    opacity: op,
                    lineWidth: currentLineWidth
                });
            }
        } else if (currentTool === 'circle') {
            let r = Math.sqrt(Math.pow(mx - startX, 2) + Math.pow(my - startY, 2));
            if (r > 2) screenObjects.push({ type: 'circle', x: startX, y: startY, radius: r, color: currentColor, opacity: op, lineWidth: currentLineWidth });
        } else if (currentTool === 'square') {
            if (Math.abs(mx - startX) > 2) screenObjects.push({ type: 'square', x: startX, y: startY, w: mx - startX, h: my - startY, color: currentColor, opacity: op, lineWidth: currentLineWidth });
        } else if (currentTool === 'line') {
            if (Math.abs(mx - startX) > 2 || Math.abs(my - startY) > 2) screenObjects.push({ type: 'line', x1: startX, y1: startY, x2: mx, y2: my, color: currentColor, opacity: op, lineWidth: currentLineWidth });
        }

        redrawScreen();
    });

    // Touch Support for Screen Canvas
    canvas.addEventListener('touchstart', (e) => {
        if (currentTool === 'cursor') return;
        if (e.touches.length > 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        canvas.dispatchEvent(new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        }));
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (currentTool === 'cursor' || !isDrawing) return;
        e.preventDefault();
        const touch = e.touches[0];
        canvas.dispatchEvent(new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        }));
    }, { passive: false });

    canvas.addEventListener('touchend', (e) => {
        if (currentTool === 'cursor' || !isDrawing) return;
        e.preventDefault();
        const touch = e.changedTouches[0];
        canvas.dispatchEvent(new MouseEvent('mouseup', {
            clientX: touch.clientX,
            clientY: touch.clientY
        }));
    }, { passive: false });

    function isHit(px, py, obj, targetCtx) {
        if (obj.type === 'circle') {
            let dist = Math.sqrt(Math.pow(px - obj.x, 2) + Math.pow(py - obj.y, 2));
            return Math.abs(dist - obj.radius) < 15;
        } else if (obj.type === 'square') {
            return px >= Math.min(obj.x, obj.x + obj.w) - 10 && px <= Math.max(obj.x, obj.x + obj.w) + 10 &&
                   py >= Math.min(obj.y, obj.y + obj.h) - 10 && py <= Math.max(obj.y, obj.y + obj.h) + 10;
        } else if (obj.type === 'text') {
            return px >= obj.x - 10 && px <= obj.x + 150 && py >= obj.y - 25 && py <= obj.y + 10;
        } else if (obj.points) {
            return obj.points.some(p => Math.abs(p.x - px) < 15 && Math.abs(p.y - py) < 15);
        }
        return false;
    }

    // KEYBOARD TEXT INPUT OVERLAY
    function createTextInput(x, y, isWhiteboard) {
        const existing = document.querySelector('.canvas-text-input');
        if (existing) existing.remove();

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'canvas-text-input';
        input.placeholder = 'Escribe aquí...';
        input.style.left = x + 'px';
        input.style.top = y + 'px';
        input.style.color = currentColor;

        if (isWhiteboard) {
            document.getElementById('wbCanvasWrap').appendChild(input);
        } else {
            document.body.appendChild(input);
        }

        setTimeout(() => input.focus(), 10);

        function commitText() {
            const val = input.value.trim();
            if (val) {
                const targetArray = isWhiteboard ? wbObjects : screenObjects;
                const rect = isWhiteboard ? wbCanvas.getBoundingClientRect() : { left: 0, top: 0 };
                targetArray.push({
                    type: 'text',
                    x: isWhiteboard ? (x - rect.left) : x,
                    y: isWhiteboard ? (y - rect.top + 20) : (y + 20),
                    text: val,
                    color: currentColor,
                    opacity: toolOpacities['text'] || 100
                });
                if (isWhiteboard) redrawWb(); else redrawScreen();
            }
            input.remove();
        }

        input.addEventListener('keydown', (evt) => { if (evt.key === 'Enter') commitText(); });
        input.addEventListener('blur', commitText);
    }

    // WHITEBOARD MODAL ENGINE
    const wbCanvas = document.getElementById('wbCanvas');
    const wbCtx = wbCanvas.getContext('2d');
    let isWbDrawing = false;
    let wbStartX = 0, wbStartY = 0;
    let activeWbPoints = [];

    function resizeWbCanvas() {
        const wrap = document.getElementById('wbCanvasWrap');
        if (wrap && wrap.clientWidth > 0) {
            wbCanvas.width = wrap.clientWidth;
            wbCanvas.height = wrap.clientHeight;
            redrawWb();
        }
    }

    function redrawWb() {
        wbCtx.clearRect(0, 0, wbCanvas.width, wbCanvas.height);
        wbObjects.forEach(obj => drawObject(wbCtx, obj));
    }

    document.getElementById('tbWhiteboardBtn').addEventListener('click', () => {
        wbModal.style.display = 'flex';
        setTimeout(resizeWbCanvas, 50);
    });

    document.getElementById('wbCloseBtn').addEventListener('click', () => { wbModal.style.display = 'none'; });
    document.getElementById('wbClearBtn').addEventListener('click', () => { wbObjects = []; redrawWb(); });

    wbCanvas.addEventListener('mousedown', (e) => {
        const rect = wbCanvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        if (currentTool === 'text') { createTextInput(e.clientX, e.clientY, true); return; }

        if (currentTool === 'eraser') {
            for (let i = wbObjects.length - 1; i >= 0; i--) {
                if (isHit(mx, my, wbObjects[i], wbCtx)) {
                    wbObjects.splice(i, 1);
                    break;
                }
            }
            redrawWb();
            return;
        }

        if (currentTool === 'cursor') return;

        isWbDrawing = true;
        wbStartX = mx;
        wbStartY = my;
        activeWbPoints = [{ x: mx, y: my }];
    });

    wbCanvas.addEventListener('mousemove', (e) => {
        if (!isWbDrawing || currentTool === 'cursor') return;
        const rect = wbCanvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        if (currentTool === 'pencil' || currentTool === 'highlighter') {
            activeWbPoints.push({ x: mx, y: my });
            redrawWb();
            drawObject(wbCtx, {
                type: currentTool,
                points: activeWbPoints,
                color: currentColor,
                opacity: toolOpacities[currentTool] || 100,
                lineWidth: currentLineWidth
            });
        } else {
            redrawWb();
            const op = toolOpacities[currentTool] || 100;
            if (currentTool === 'circle') {
                let r = Math.sqrt(Math.pow(mx - wbStartX, 2) + Math.pow(my - wbStartY, 2));
                drawObject(wbCtx, { type: 'circle', x: wbStartX, y: wbStartY, radius: r, color: currentColor, opacity: op, lineWidth: currentLineWidth });
            } else if (currentTool === 'square') {
                drawObject(wbCtx, { type: 'square', x: wbStartX, y: wbStartY, w: mx - wbStartX, h: my - wbStartY, color: currentColor, opacity: op, lineWidth: currentLineWidth });
            } else if (currentTool === 'line') {
                drawObject(wbCtx, { type: 'line', x1: wbStartX, y1: wbStartY, x2: mx, y2: my, color: currentColor, opacity: op, lineWidth: currentLineWidth });
            }
        }
    });

    wbCanvas.addEventListener('mouseup', (e) => {
        if (!isWbDrawing || currentTool === 'cursor') return;
        isWbDrawing = false;
        const rect = wbCanvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const op = toolOpacities[currentTool] || 100;

        if (currentTool === 'pencil' || currentTool === 'highlighter') {
            if (activeWbPoints.length > 0) {
                wbObjects.push({
                    type: currentTool,
                    points: [...activeWbPoints],
                    color: currentColor,
                    opacity: op,
                    lineWidth: currentLineWidth
                });
            }
        } else if (currentTool === 'circle') {
            let r = Math.sqrt(Math.pow(mx - wbStartX, 2) + Math.pow(my - wbStartY, 2));
            if (r > 2) wbObjects.push({ type: 'circle', x: wbStartX, y: wbStartY, radius: r, color: currentColor, opacity: op, lineWidth: currentLineWidth });
        } else if (currentTool === 'square') {
            if (Math.abs(mx - wbStartX) > 2) wbObjects.push({ type: 'square', x: wbStartX, y: wbStartY, w: mx - wbStartX, h: my - wbStartY, color: currentColor, opacity: op, lineWidth: currentLineWidth });
        } else if (currentTool === 'line') {
            if (Math.abs(mx - wbStartX) > 2 || Math.abs(my - wbStartY) > 2) wbObjects.push({ type: 'line', x1: wbStartX, y1: wbStartY, x2: mx, y2: my, color: currentColor, opacity: op, lineWidth: currentLineWidth });
        }

        redrawWb();
    });

    // Touch Support for Whiteboard Canvas
    wbCanvas.addEventListener('touchstart', (e) => {
        if (currentTool === 'cursor') return;
        if (e.touches.length > 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        wbCanvas.dispatchEvent(new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        }));
    }, { passive: false });

    wbCanvas.addEventListener('touchmove', (e) => {
        if (currentTool === 'cursor' || !isWbDrawing) return;
        e.preventDefault();
        const touch = e.touches[0];
        wbCanvas.dispatchEvent(new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        }));
    }, { passive: false });

    wbCanvas.addEventListener('touchend', (e) => {
        if (currentTool === 'cursor' || !isWbDrawing) return;
        e.preventDefault();
        const touch = e.changedTouches[0];
        wbCanvas.dispatchEvent(new MouseEvent('mouseup', {
            clientX: touch.clientX,
            clientY: touch.clientY
        }));
    }, { passive: false });

    // Initial setup
    initCanvasDimensions();
    updatePointerEvents();
})();

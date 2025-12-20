<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Calculator | Interactive Web Calculator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary: #2c3e50;
            --secondary: #3498db;
            --accent: #e74c3c;
            --light: #ecf0f1;
            --dark: #1a252f;
            --success: #2ecc71;
            --shadow: rgba(0, 0, 0, 0.1);
        }
        
        body {
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary), var(--dark));
            color: white;
            padding: 2rem 0;
            box-shadow: 0 4px 12px var(--shadow);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo i {
            font-size: 2.5rem;
            color: var(--secondary);
        }
        
        .logo h1 {
            font-size: 2rem;
            font-weight: 700;
        }
        
        .logo span {
            color: var(--secondary);
        }
        
        .nav-links {
            display: flex;
            gap: 25px;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            font-size: 1.1rem;
        }
        
        .nav-links a:hover {
            color: var(--secondary);
        }
        
        /* Hero Section */
        .hero {
            padding: 4rem 0;
            text-align: center;
            background-color: white;
        }
        
        .hero h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 2rem;
            color: #555;
        }
        
        .cta-button {
            display: inline-block;
            background-color: var(--secondary);
            color: white;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
            box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
        }
        
        .cta-button:hover {
            background-color: #2980b9;
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(52, 152, 219, 0.4);
        }
        
        /* Calculator Section */
        .calculator-section {
            padding: 4rem 0;
            background-color: #f5f7fa;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 3rem;
            color: var(--primary);
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            width: 80px;
            height: 4px;
            background-color: var(--secondary);
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .calculator-wrapper {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 50px;
        }
        
        .calculator-container {
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px var(--shadow);
            padding: 25px;
            width: 100%;
            max-width: 400px;
        }
        
        .calculator-display {
            background-color: var(--dark);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: right;
            font-size: 2rem;
            margin-bottom: 20px;
            min-height: 90px;
            overflow: hidden;
            word-break: break-all;
            font-family: 'Courier New', monospace;
        }
        
        .calculator-buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
        
        .calc-btn {
            padding: 20px;
            font-size: 1.3rem;
            border: none;
            border-radius: 10px;
            background-color: var(--light);
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 600;
        }
        
        .calc-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 10px var(--shadow);
        }
        
        .operator {
            background-color: var(--secondary);
            color: white;
        }
        
        .equals {
            background-color: var(--success);
            color: white;
            grid-column: span 2;
        }
        
        .clear, .delete {
            background-color: var(--accent);
            color: white;
        }
        
        .calculator-info {
            flex: 1;
            min-width: 300px;
        }
        
        .calculator-info h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: var(--primary);
        }
        
        .features-list {
            list-style-type: none;
            margin-bottom: 30px;
        }
        
        .features-list li {
            padding: 10px 0;
            padding-left: 35px;
            position: relative;
        }
        
        .features-list li i {
            position: absolute;
            left: 0;
            top: 12px;
            color: var(--success);
        }
        
        /* Documentation Section */
        .documentation {
            padding: 4rem 0;
            background-color: white;
        }
        
        .docs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        
        .doc-card {
            background-color: #f5f7fa;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 5px 15px var(--shadow);
            transition: transform 0.3s;
        }
        
        .doc-card:hover {
            transform: translateY(-10px);
        }
        
        .doc-card i {
            font-size: 2.5rem;
            color: var(--secondary);
            margin-bottom: 20px;
        }
        
        .doc-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--primary);
        }
        
        .code-block {
            background-color: var(--dark);
            color: var(--light);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 3rem 0 1.5rem;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 40px;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            color: var(--secondary);
        }
        
        .footer-links {
            list-style-type: none;
        }
        
        .footer-links li {
            margin-bottom: 10px;
        }
        
        .footer-links a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: var(--secondary);
        }
        
        .copyright {
            text-align: center;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #aaa;
            font-size: 0.9rem;
        }
        
        .demo-link {
            display: inline-block;
            margin-top: 15px;
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
        }
        
        .demo-link:hover {
            text-decoration: underline;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 20px;
            }
            
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .hero h2 {
                font-size: 2rem;
            }
            
            .section-title {
                font-size: 1.8rem;
            }
            
            .calculator-wrapper {
                flex-direction: column;
                align-items: center;
            }
            
            .calculator-info {
                text-align: center;
            }
            
            .footer-content {
                flex-direction: column;
                text-align: center;
            }
        }
        
        @media (max-width: 480px) {
            .calculator-buttons {
                gap: 10px;
            }
            
            .calc-btn {
                padding: 15px;
                font-size: 1.1rem;
            }
            
            .hero {
                padding: 3rem 0;
            }
            
            .hero h2 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-calculator"></i>
                    <h1>Custom <span>Calculator</span></h1>
                </div>
                <nav class="nav-links">
                    <a href="#calculator">Calculator</a>
                    <a href="#features">Features</a>
                    <a href="#documentation">Documentation</a>
                    <a href="#live-demo">Live Demo</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h2>Interactive Custom Calculator</h2>
            <p>A simple and interactive calculator built with HTML, CSS, and JavaScript. Perform basic arithmetic operations with a clean and user-friendly interface.</p>
            <a href="#calculator" class="cta-button">Try Calculator Now</a>
        </div>
    </section>

    <!-- Calculator Section -->
    <section id="calculator" class="calculator-section">
        <div class="container">
            <h2 class="section-title">Interactive Calculator</h2>
            <div class="calculator-wrapper">
                <div class="calculator-container">
                 
                
                <div class="calculator-info">
                    <h3>Calculator Features</h3>
                    <ul class="features-list">
                        <li><i class="fas fa-check-circle"></i> Addition, subtraction, multiplication, and division</li>
                        <li><i class="fas fa-check-circle"></i> Clear and delete functions</li>
                        <li><i class="fas fa-check-circle"></i> Responsive design for desktop and mobile</li>
                        <li><i class="fas fa-check-circle"></i> Lightweight and fast</li>
                        <li><i class="fas fa-check-circle"></i> Clean and intuitive user interface</li>
                        <li><i class="fas fa-check-circle"></i> Real-time calculation display</li>
                    </ul>
                    <a href="https://lasithwxn.github.io/Custom-Calculator/fullcode.html" target="_blank" class="demo-link">
                        <i class="fas fa-external-link-alt"></i> View Live Demo on GitHub Pages
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Documentation Section -->
    <section id="documentation" class="documentation">
        <div class="container">
            <h2 class="section-title">Project Documentation</h2>
            <div class="docs-grid">
                <div class="doc-card">
                    <i class="fas fa-code"></i>
                    <h3>Getting Started</h3>
                    <p>To run this project locally, follow these steps:</p>
                    <div class="code-block">
                        git clone https://github.com/LasithWXN/Custom-Calculator.git<br>
                        cd Custom-Calculator<br>
                        open fullcode.html
                    </div>
                    <p>Start using your calculator immediately after opening the HTML file in your browser.</p>
                </div>
                
                <div class="doc-card">
                    <i class="fas fa-cogs"></i>
                    <h3>Technologies Used</h3>
                    <ul class="features-list">
                        <li><i class="fab fa-html5"></i> HTML5</li>
                        <li><i class="fab fa-css3-alt"></i> CSS3</li>
                        <li><i class="fab fa-js-square"></i> JavaScript (ES6)</li>
                    </ul>
                    <p>This project uses vanilla JavaScript with no external dependencies, making it lightweight and fast.</p>
                </div>
                
                <div class="doc-card">
                    <i class="fas fa-book"></i>
                    <h3>Learn More</h3>
                    <p>Explore documentation for the technologies used in this project:</p>
                    <ul class="footer-links">
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript Documentation</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML Documentation</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS Documentation</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="live-demo">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Custom Calculator</h3>
                    <p>A simple and interactive calculator built with HTML, CSS, and JavaScript.</p>
                    <a href="https://github.com/LasithWXN/Custom-Calculator" target="_blank" class="demo-link">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#calculator">Calculator</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#documentation">Documentation</a></li>
                        <li><a href="https://lasithwxn.github.io/Custom-Calculator/" target="_blank">Live Demo</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Project Info</h3>
                    <ul class="footer-links">
                        <li><a href="https://github.com/LasithWXN" target="_blank">Developer: LasithWXN</a></li>
                        <li><a href="https://github.com/LasithWXN/Custom-Calculator" target="_blank">GitHub Repository</a></li>
                        <li>License: MIT License</li>
                        <li>Open Source Project</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 Custom Calculator Project. This project is open-source and available under the MIT License.</p>
            </div>
        </div>
    </footer>

    <script>
        // Calculator functionality
        const display = document.getElementById('display');
        let currentInput = '0';
        let previousInput = '';
        let operator = null;
        let resetScreen = false;
        
        function updateDisplay() {
            display.textContent = currentInput;
        }
        
        function appendToDisplay(value) {
            if (currentInput === '0' || resetScreen) {
                currentInput = value;
                resetScreen = false;
            } else {
                currentInput += value;
            }
            updateDisplay();
        }
        
        function clearDisplay() {
            currentInput = '0';
            previousInput = '';
            operator = null;
            updateDisplay();
        }
        
        function deleteLast() {
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            updateDisplay();
        }
        
        function setOperator(op) {
            if (operator !== null) calculateResult();
            previousInput = currentInput;
            operator = op;
            resetScreen = true;
        }
        
        function calculateResult() {
            let computation;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            
            if (isNaN(prev) || isNaN(current)) return;
            
            switch (operator) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("Cannot divide by zero!");
                        clearDisplay();
                        return;
                    }
                    computation = prev / current;
                    break;
                default:
                    return;
            }
            
            currentInput = computation.toString();
            operator = null;
            previousInput = '';
            updateDisplay();
        }
        
        // Override button functions for operators
        function handleOperator(op) {
            setOperator(op);
            currentInput += op;
            updateDisplay();
        }
        
        // Initialize display
        updateDisplay();
        
        // Update operator button click handlers
        document.querySelectorAll('.operator').forEach(button => {
            const op = button.textContent;
            if (op === '+') {
                button.onclick = () => handleOperator('+');
            } else if (op === '-') {
                button.onclick = () => handleOperator('-');
            } else if (op === '×') {
                button.onclick = () => handleOperator('*');
            } else if (op === '/') {
                button.onclick = () => handleOperator('/');
            }
        });
    </script>
</body>
</html>

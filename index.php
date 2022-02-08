<!DOCTYPE html>
<html>
<head>
	<title>Slider</title>
	<link href="CSS/sliderStyles.css" rel="stylesheet" type="text/css">
</head>
<body>
    <!-- Contenedor del Slider -->
    <div class="slider-container">
        <div class="slider" id="slider_id">
            <div class="slider-section" >
                <img class="img_slider" id="img_selected" src="">
            </div>
        </div>
        <div id="btn_right" class="btn_slider">&#62</div>
        <div id="btn_left" class="btn_slider">&#60</div>
    </div>
    <!-- Circulos del slider -->
    <ul id="circulos">
        <li class="circulo-section" id="1"><span   class="circulo_subSection"></span></li>
        <li class="circulo-section" id="2"><span  class="circulo_subSection"></span></li>
        <li class="circulo-section" id="3"><span  class="circulo_subSection"></span></li>
    </ul>
    <script src="JS/slider.js"></script>
</body>
</html>
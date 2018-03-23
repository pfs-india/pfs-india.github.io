---
layout: default
title: Home
---

<!-- <div class="parallax"></div> -->
<div id="demo" class="carousel carousel-fade" data-ride="carousel" data-interval="5000">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div role="listbox" class="carousel-inner embed-responsive embed-responsive-16by9">
    <div class="carousel-item active embed-responsive-item">
      <img src="{{ "public/images/header_one.jpg" | relative_url }}" alt="">
      <div class="carousel-caption h-80">
        <div class="row">
          <div class="col">
            <p class="times text-center animated zoomIn">Perfect Financial Solutions</p>
            <hr style="width: 50px; height: 1px; background-color: white;">
            <p class="times-small text-center animated zoomIn">Finding way to funding home...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item  embed-responsive-item">
      <img src="{{ "public/images/header_two.jpg" | relative_url }}" alt="">
      <div class="carousel-caption h-50 align-items-center justify-content-center">
        <h1 class="times animated zoomIn">Home Loans | Blah | Blah</h1><br>
        <h2 class="times">Easy Loans</h2>
      </div>
    </div>
    <div class="carousel-item  embed-responsive-item">
      <img src="{{ "public/images/header_three.jpg" | relative_url }}" alt="">
      <div class="carousel-caption h-50 align-items-center justify-content-center">
        <h1 class="times animated zoomIn">Perfect Financial Solutions</h1><br>
        <h2 class="times">Easy Loans</h2>
      </div>
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

<div class="section">
  <div class="container">
    <div class="row">
      <div class="col text-center section-title">
        <h1 class="animated animated-zoomIn">We offer different services</h1>
        <hr style="width: 50px; height: 1px; background-color: #7378df">
      </div> <!-- ./col -->
    </div> <!-- ./row -->
    <div class="row">
      <div class="col-4">

      </div>
    </div>
  </div> <!-- ./container -->
</div>

<div class="section-dark">
  <div class="container">
    <div class="row">
      <div class="col text-center section-title">
        <h1 class="animated animated-zoomIn">Our Partner Banks</h1>
        <hr style="width: 50px; height: 1px; background-color: white;">
      </div> <!-- ./col -->
    </div> <!-- ./row -->
    {% assign image_files = site.static_files | where: "image", true %}
    <div class="row">
      {% for image in image_files %}
        <div class="col-sm-2" style="padding:10px">
          <img class="img-fluid" src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        </div>
      {% endfor %}
    </div>
  </div> <!-- ./container -->
</div>

<div class="section">
  <div class="container">
    <div class="row">
      <div class="col text-center section-title">
        <h1 class="animated animated-zoomIn">Some other title</h1>
        <hr style="width: 50px; height: 1px; background-color: white;">
      </div> <!-- ./col -->
    </div> <!-- ./row -->
  </div> <!-- ./container -->
</div>

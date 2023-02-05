<template>
 <div class="custom-header">
 <nav class="navbar navbar-expand-lg navbar-light ">
    <router-link class="navbar-brand m-0 p-0" to="/">
       <img alt="Vue logo" src="./assets/logo.png" style="hight:50px; width:50px;">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>    
    <div class="collapse navbar-collapse navbar-light justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/about" >About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/about" >Service</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/about" >Pertner</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/contact" >Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/contact" >Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-menu" to="/login" >Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  <div class="m-0">    
    <div class="row">
      <div class="col-lg-2 col-sm-0 custom-sidebar border">        
        <!-- Sidebar goes here --> 
        <div class="flex-shrink-0 p-3 ">
          <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-5 fw-semibold">Menu</span>
          </a>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Home
              </button>
              <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">Overview</a></li>
                  <li><a href="#" class="link-dark rounded">Updates</a></li>
                  <li><a href="#" class="link-dark rounded">Reports</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Dashboard
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">Overview</a></li>
                  <li><a href="#" class="link-dark rounded">Weekly</a></li>
                  <li><a href="#" class="link-dark rounded">Monthly</a></li>
                  <li><a href="#" class="link-dark rounded">Annually</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Orders
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">New</a></li>
                  <li><a href="#" class="link-dark rounded">Processed</a></li>
                  <li><a href="#" class="link-dark rounded">Shipped</a></li>
                  <li><a href="#" class="link-dark rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
              </button>
              <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">New...</a></li>
                  <li><a href="#" class="link-dark rounded">Profile</a></li>
                  <li><a href="#" class="link-dark rounded">Settings</a></li>
                  <li><a href="#" class="link-dark rounded">Sign out</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div class="col-lg-9 col-sm-12" style="min-height: 100vh;">
        <!-- Main content goes here -->
        <router-view />    
      </div>      
    </div>
  </div>
  
  <footer class="custom-footer text-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in faucibus.</p>
        </div>
        <div class="col-12 col-md-4">
          <h3>Contact Us</h3>
          <ul class="list-unstyled">
            <li>Email: contact@example.com</li>
            <li>Phone: 555-555-5555</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <h3>Follow Us</h3>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-outline-primary">Facebook</a>
            <a href="#" class="btn btn-outline-danger">Twitter</a>
            <a href="#" class="btn btn-outline-info">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </footer>  
</template>

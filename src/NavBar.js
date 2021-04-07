import React from 'react';

function NavBar() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
      <div class="row justify-content-between">
    <a class="navbar-brand" href="#">Chaney Sign & Graphics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
            <div class="pictures">
          <a class="nav-link" href="#">Pictures</a>
          </div>
        </li>
      </ul>
      </div>
      </div>
      <span class="navbar-text justify-content-end">
        Family Owned!
      </span>
      </div>
</nav>
    </div>
    )
}

export default NavBar;
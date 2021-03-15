import { useEffect } from "react";
const Projects = () => {
  return (
    <div class="container projects mt-2">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="card card-block">
            <img
              src="https://zupimages.net/up/21/10/grid.png"
              alt="Space Invaders photo"
            />
            <h5 class="card-title mt-3 mb-1">Space Invaders</h5>
            <p class="card-text">#HTML #CSS #Javascript</p>
            <a
              href="https://github.com/Nicolas-Gallego/Space-Invaders"
              target="blank"
              className="projectLink"
            >
              <h6 class="card-link text-right">
                <i class="fab fa-github-square"></i>
              </h6>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card card-block">
            <img
              src="https://zupimages.net/up/21/10/1qwb.png"
              alt="Space Invaders photo"
            />
            <h5 class="card-title mt-3 mb-1">Moovice</h5>
            <p class="card-text">#React #CSS</p>
            <a
              href="https://github.com/Nicolas-Gallego/react-moovice"
              target="blank"
              className="projectLink"
            >
              <h6 class="card-link text-right">
                <i class="fab fa-github-square"></i>
              </h6>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card card-block">
            <img
              src="https://zupimages.net/up/21/10/x54u.jpg"
              alt="Space Invaders photo"
            />
            <h5 class="card-title mt-3 mb-1">Trippy</h5>
            <p class="card-text">#React #CSS</p>
            <a
              href="https://github.com/Nicolas-Gallego/trippy-project"
              target="blank"
              className="projectLink"
            >
              <h6 class="card-link text-right">
                <i class="fab fa-github-square"></i>
              </h6>
            </a>
          </div>
        </div>
        {/* <div class="col-md-3 col-sm-6">
          <div class="card card-block">
            <img
              src="https://zupimages.net/up/21/10/grid.png"
              alt="Space Invaders photo"
            />
            <h5 class="card-title mt-3 mb-1">Space Invaders</h5>
            <p class="card-text">#HTML #CSS #Javascript</p>
            <a href="" className="projectLink">
            <h6 class="card-link text-right">
            <i class="fab fa-github-square"></i>
            </h6>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;

import React from "react"
import { Link } from "gatsby"
import Title from "../../Globals/Title"
function Info(props) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center ">
            <p className="lead text-muted mb-5">
              Tempor cupidatat mollit esse anim fugiat duis aute fugiat elit
              proident laborum. Esse qui ut irure aute. Non aute tempor dolor
              cillum. Occaecat eu mollit sint esse officia enim dolor. Nulla id
              eiusmod nisi ea adipisicing pariatur sunt. Voluptate non nulla
              duis enim ipsum deserunt ipsum. Duis cupidatat excepteur nostrud
              culpa est aute in quis nostrud. Est mollit magna esse amet labore
              consequat irure eu qui Lorem.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'

// #region Styled Components
const Styles = styled.div`
  margin-top: 120px;

  h1 {
    line-height: initial;
  }
  p {
    margin-bottom: 0;
  }
  .btn {
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    border: none;
    border-radius: 300px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    background-color: #8d980b;
    border-color: #8d980b;
    text-decoration: none;
  }
`
// #endregion

const actionTips = [
  {
    title:
      'Ask a leader in your organization what big picture question they have on their mind.',
    description: (
      <>
        <p>
          If you are new to thinking like an owner, this is perfect. You need to
          be familiar with and understand the questions they ask.
        </p>
        <p>
          Learn the common onwership mindset questions and answer them when as
          you work.
        </p>
      </>
    ),
  },
]

const Ownership = () => {
  return (
    <Styles>
      <h1 className="text-center mt-5">
        Adopt an ownership mindset to impress.
      </h1>
      <p className="h3 text-center text-muted">
        Want to be a partner? Think like a partner.
      </p>

      <section className="d-flex justify-content-center mt-5">
        <div className="w-50">
          <span className="text-muted">Today's action step</span>
          <h2 className="text-left mt-0">{actionTips[0].title}</h2>
          {actionTips[0].description}
        </div>
      </section>

      <section className="d-flex justify-content-center mt-5 bg-secondary py-5 text-white">
        <div className="w-50 pb-5 pt-4">
          <span className="text-muted">Show off your ownership mindset.</span>
          <h2 className="text-left mt-0 text-white">
            What ways do you help your team think like a partner?
          </h2>
          <div className="mt-3">
            <a href="##" className="btn btn-secondary">
              Show Off Your Ownership
            </a>
          </div>
        </div>
      </section>

      <div className="mt-5">
        <Header />
      </div>
    </Styles>
  )
}

export default Ownership

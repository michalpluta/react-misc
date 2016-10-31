import React from 'react';
import ReactDOM from 'react-dom';

export class MenuExample extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      active : 0
    }
  }

  clicked(index){
    this.setState({
      active: index
    })
  }


  render(){
    return (
            <div>
              <h1>HEY</h1>
              <ul>
              {
                this.props.items.map((name, index) => {
                  let style =''

                  if(this.state.active == index){
                    style = 'focused'
                  }

                  return <li className={style} onClick={this.clicked.bind(this, index)} key={index} id={index+1}> {name} </li>
                })
              }
              </ul>

              <div>
                <p>Selected: {this.props.items[this.state.active]}</p>
              </div>
            </div>
        );
      }
    }




ReactDOM.render( <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] }/>, document.getElementById('app'));

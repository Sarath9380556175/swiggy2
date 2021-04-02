import React from 'react';

class Lifecycle extends React.Component{
constructor()
{
    super();
    this.state={
        color:"green"
    }
}
shouldComponentUpdate()
{
    return true;
}


componentWillUnmount()
{
    alert("component is unmounted");
}
componentDidMount()
{
   
        this.setState({color:"blue"});

}
    
            
        getSnapshotBeforeUpdate(Prop,State)
        {
            document.getElementById("kkr").innerHTML="before the update the color was"+State.color;
        }

        componentDidUpdate()
        {
            document.getElementById("srh").innerHTML="after the update the color was"+this.state.color;


        }


    render()
    {
        return(
            <div>
            <h3>go {this.state.color}</h3>
            <button>click</button>
             <div  id="kkr"></div>
             <div id="srh"></div>

            </div>
        )
    }
}

export default Lifecycle;
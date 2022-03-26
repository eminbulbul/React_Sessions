import React from 'react'

class ClassComponent extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {count: 0}
  // }
  state = { count: 0 }

  increase = () => this.setState({ count: this.state.count + 1 })
  // increase = () => this.setState({ name: 'Emin' })

  //! component olustuktan sonra gerceklesecek eylem - Didmount sadece bir kere calisir(ilk olusmada)
  componentDidMount() {
    console.log('Class Comp Mounted')
    // this.increase()
  }
  //! componenet guncellendiginde gerceklesecek eylem
  componentDidUpdate(prevProps, prevState) {
    // console.log('Class componenet updated')
    console.log(prevState.count)
    prevState.count !== this.state.count && console.log('Class componenet updated')
  }
  //! Component oldugunde gerceklesecek islem
  componentWillUnmount() {
    alert('Class Comp Will Unmount Bye Bye')
  }

  render() {
    console.log('Class Comp Rendered!')
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count:{this.state.count}</h3>
        {/* <h3>Name:{this.state.name}</h3> */}
        <button onClick={this.increase}>Increase</button>
      </div>
    )
  }
}

export default ClassComponent

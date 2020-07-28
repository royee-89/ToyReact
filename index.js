import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component{
    
    render() {
        return (
            <div>
                <span>aaa</span>

                <span>bbb</span>
                <span>ccc</span>
                <div>
                    {true}
                    {this.children}
                </div>
            </div>
        )
    }
}

let a = (
    <MyComponent name="a" id="ida">
        <div>123</div>
    </MyComponent>
)

ToyReact.render(
    a,
    document.body
)
// document.body.appendChild(a)
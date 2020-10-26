import React,{ Component } from 'react';
import AddProjectTitle from '../component/AddProjectTitle';
import AddSlidderImage from '../component/AddSliderImage';
import AddBanner from '../component/AddBanner';
import AddProduct from '../component/AddProduct';
import AddCategory from '../component/AddCategory';
import AddShop from '../component/AddShop';
import './SideBar.css';

const SideBar = () => (
  <div className="SideBar">
    <Tabs selected={ 1 }>
      <TabList>
        <div className="top-margin"></div>
        <Tab>
          <Button>Dashboard</Button>
        </Tab>
        <Tab>
          <Button>Add Title</Button>
        </Tab>
        <Tab>
          <Button>Add Slidder Image</Button>
        </Tab>
        <Tab>
          <Button>Add Banner</Button>
        </Tab>
        <Tab>
          <Button>Add Category</Button>
        </Tab>
        <Tab>
          <Button>Add Product</Button>
        </Tab>
        <Tab>
          <Button>Add Shop</Button>
        </Tab>
        <div className="footer">
          <Button disabled>Follow us</Button>
        </div>
      </TabList>
      <TabPanel>
          <h1>Dashboard</h1>
      </TabPanel>
      <TabPanel>
          <AddProjectTitle />
      </TabPanel>
      <TabPanel>
          <AddSlidderImage />
      </TabPanel>
      <TabPanel>
          <AddBanner />
      </TabPanel>
      <TabPanel>
          <AddCategory />
      </TabPanel>
      <TabPanel>
          <AddProduct />
      </TabPanel>
      <TabPanel>
          <AddShop />
      </TabPanel>
    </Tabs>
  </div>
)

class Tabs extends Component {
  state = { selected: this.props.selected };

  setSelected(selected) {
    if (selected !== this.state.selected) {
      this.setState({ selected })
    }
  }

  handleClick(tab) {
    return () => this.setSelected(tab)
  }

  renderTabList(child) {
    let tab = 0

    return React.cloneElement(child, {
      children: React.Children.map(child.props.children, (childTab) => {
        if (childTab.type.name === "Tab") {
          const _isActive = (tab === this.state.selected)
          const _onClick = this.handleClick(tab)

          tab++

          return React.cloneElement(childTab, { _isActive, _onClick })
        }

        return childTab
      }),
    })
  }

  renderChildren(children) {
    let panel = 0

    return React.Children.map(children, (child) => {
      if (child.type.name === "TabList") {
        return this.renderTabList(child)
      }

      if (child.type.name === "TabPanel") {
        const _isActive = (panel === this.state.selected)

        panel++

        return React.cloneElement(child, { _isActive })
      }

      return child
    })
  }

  render() {
    return (
      <div className="Tabs">
        { this.renderChildren(this.props.children) }
      </div>
    )
  }
}

const TabList = ({ children }) => (
  <ul className="TabList">
    { children }
  </ul>
)

const Tab = ({
  _onClick,
  _isActive,
  children,
}) => (
  <li
    className={ `Tab  ${ _isActive ? "is-active" : "" }` }
    onClick={ _onClick }>
    { children }
  </li>
)

const TabPanel = ({
  _isActive,
  children,
}) => (
  <div className={ `TabPanel  ${ _isActive ? "is-active" : "" }` }>
    { children }
  </div>
)


const Button = ({ children }) => (
  <button className="Button">
    { children }
  </button>
)

export default SideBar;
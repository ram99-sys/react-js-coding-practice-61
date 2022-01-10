import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="top-section-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="options-container">
            <li>
              <input
                type="checkbox"
                id="content"
                className="checkbox"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="leftNavbar"
                className="checkbox"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="rightNavbar"
                className="checkbox"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

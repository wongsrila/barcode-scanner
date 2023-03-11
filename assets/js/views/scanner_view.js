import { footerThreeView } from "./partials/footer_view.js";

const renderView = () => {
  return /*html*/ `
    <main>
      <div id="reader"></div>
    </main>
    ${footerThreeView()}
  `
}

export default renderView;
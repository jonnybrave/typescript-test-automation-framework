import { BasePage } from './../base-page';

export class InventoryPage extends BasePage {
  private backpackAddToCartButton = this.by.id("add-to-cart-sauce-labs-backpack");
  private bikeLightAddToCartButton = this.by.id("add-to-cart-sauce-labs-bike-light");
  private onesieAddToCartButton = this.by.id("add-to-cart-sauce-labs-onesie");
  private T_ShirtAddToCartButton = this.by.id("add-to-cart-sauce-labs-bolt-t-shirt");
  private shopingCartButton = this.by.xpath("//a[@data-test='shopping-cart-link']");
  private menuTopLeft = this.by.id("react-burger-menu-btn");
  private LogoutButton = this.by.id("logout_sidebar_link");

  public async clickBackpackAddToCart() {
    await this.backpackAddToCartButton.click();
  }

  public async clickBikeLightAddToCart() {
    await this.bikeLightAddToCartButton.click();
  }

  public async clickOnesieAddToCart() {
    await this.onesieAddToCartButton.click();
  }

  public async clickT_ShirtAddToCartButton() {
    await this.T_ShirtAddToCartButton.click();
  }

  public async clickShopingCart() {
    await this.shopingCartButton.click();
  }

  public async clickMenutTopLeft(){
    await this.menuTopLeft.click();
  }

  public async clickLogoutButton(){
    await this.LogoutButton.click();
  }
}

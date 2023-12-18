exports.SearchResults = class SearchResults {


    constructor(page) {

        this.page = page;
        this.nav_item_users = page.getByTestId('nav-item-users');
    }

    async selectUser(username) {
        await this.nav_item_users.click();
        await this.page.getByRole('link', { name: username }).click();
    }
}
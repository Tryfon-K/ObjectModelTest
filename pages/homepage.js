exports.HomePage = class HomePage {

    constructor(page) {

        this.page = page;
        this.search_bar = page.getByRole('button', { name: 'Search or jump to...' });
        this.typable_search_bar = page.locator('id=query-builder-test');
        
    }

    async searchFor(search_item, search_result) {
        await this.search_bar.click();
        await this.typable_search_bar.fill(search_item);
        await this.page.getByText(search_result).click();

    }

}
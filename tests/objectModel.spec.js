import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homepage'
import { SearchResults } from '../pages/search_result';
import { UserHomePage } from '../pages/user_homepage';
import { ProjectPage } from '../pages/project_page';
import { TestsFolder } from '../pages/tests_folder';


test('Github object model test', async ({ page }) => {

    const Home = new HomePage(page);
    const SearchResultsPage = new SearchResults(page);
    const UserHome = new UserHomePage(page);
    const Project = new ProjectPage(page);
    const TestsFold = new TestsFolder(page);

    await page.goto('https://github.com/');

    await Home.searchFor('Tryfon-K', 'Tryfon-K Search all of GitHub');
    await SearchResultsPage.selectUser('Tryfon-K');
    await UserHome.selectProject('first-test-weather');
    await expect(page).toHaveTitle('GitHub - Tryfon-K/first-test-weather: My first test. Checking the temperatures in Brno');
    await Project.click_tests_folder();
    await expect(TestsFold.my_first_test_file).toBeVisible();


});
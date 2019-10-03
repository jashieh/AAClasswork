require 'spec_helper'
require 'rails_helper'


feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "Sign Up!"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'username', :with => "testing@email.com"
      fill_in 'password', :with => "biscuits"
      click_on "Sign up"
    end

    #scenario "redirects to bands index page after signup"
  end

  feature "with an invalid user" do
      background :each do
      visit new_user_url
      fill_in 'username', :with => "testing@email.com"
      click_on "Sign up"
    end

    #scenario "re-renders the signup page after failed signup"
  end

end
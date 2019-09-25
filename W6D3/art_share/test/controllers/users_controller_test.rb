require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get user_params" do
    get users_user_params_url
    assert_response :success
  end

  test "should get create" do
    get users_create_url
    assert_response :success
  end

  test "should get destroy" do
    get users_destroy_url
    assert_response :success
  end

end

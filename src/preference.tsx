import { Action, ActionPanel, Form, Icon, showToast, Toast } from "@raycast/api";

export default function Command() {
  const APICN = "https://app.happybooker.cn";
  const APICOM = "https://app.hbooker.com";
  return (
    <Form
      actions={
        <ActionPanel>
          <LoginAction />
        </ActionPanel>
      }
    >
      {/* <Form.TextField id="device_token" title="device_token" placeholder="Enter the device token" />
      <Form.TextField id="app_version" title="app_version" placeholder="Enter the app version" /> */}
      <Form.Dropdown id="api" title="API">
        <Form.Dropdown.Item value={APICOM} title={APICOM} />
        <Form.Dropdown.Item value={APICN} title={APICN} />
      </Form.Dropdown>
    </Form>
  );
}

function LoginAction() {
  async function handleSubmit(values: { login_name: string; password: string }) {
    if (!values.login_name || !values.password) {
      showToast({
        style: Toast.Style.Failure,
        title: "Login name and password is required",
      });
      return;
    }
  }
  return <Action.SubmitForm icon={Icon.Bubble} title="login account" onSubmit={handleSubmit} />;
}

// function SaveAction(){
//   async function handler(values:{api:string}){

//   }
// }

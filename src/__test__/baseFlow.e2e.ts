import { screen } from "@testing-library/testcafe";
import { Selector } from "testcafe";

fixture`Base Flow Tests`.page`http://localhost:3000`;

test("Main Flow Tests", async (t: TestController) => {
  await t.expect(screen.queryByText("Request an invite").exists).ok();
  await t
    .click(".invite_button")
    .expect(screen.queryByRole("dialog").exists)
    .ok();
  await t
    .typeText(screen.queryByPlaceholderText("Full name"), "aa")
    .typeText(screen.queryByPlaceholderText("Email"), "foo")
    .typeText(screen.queryByPlaceholderText("Confirm Email"), "bar")
    .click(screen.queryByText("Send"))
    .expect(screen.queryByText("length of username must > 3").exists)
    .ok()
    .expect(screen.queryByText("You must input a valid email address").exists)
    .ok()
    .expect(
      screen.queryByText("Please make sure you entered the same email address")
        .exists
    )
    .ok();

  await t
    .selectText(screen.queryByPlaceholderText("Full name"))
    .pressKey("delete")
    .selectText(screen.queryByPlaceholderText("Email"))
    .pressKey("delete")
    .selectText(screen.queryByPlaceholderText("Confirm Email"))
    .pressKey("delete")
    .typeText(screen.queryByPlaceholderText("Full name"), "some user")
    .typeText(screen.queryByPlaceholderText("Email"), "foo@bar.com")
    .typeText(screen.queryByPlaceholderText("Confirm Email"), "foo@bar.com")
    .click(screen.queryByText("Send"))
    .expect(screen.queryByText("Sending").exists)
    .ok("", { timeout: 10000 });

  await t.expect(screen.queryByText("All done!").exists).ok();
});

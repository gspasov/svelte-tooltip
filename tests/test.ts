import { expect, test } from "@playwright/test";

test("index page has a Tooltip component which will show tooltip when target is hovered", async ({
  page,
}) => {
  await page.goto("/");
  const box = await page
    .locator("div[class^='parent'] > div:first-child > div[class^='target']:first-child")
    .boundingBox();
  await page.mouse.move(box.x, box.y);
  await page.screenshot({ path: "./tests/screenshots/test.png" });
  const tooltipText = await page.textContent("div[class^='tooltip']", { timeout: 3_000 });
  expect(tooltipText.trim()).toBe("Lorem ipsum dolor sit amet");
});

import handler from "../../src/pages/api/contact";
import { createMocks } from "node-mocks-http";

jest.mock("@sendgrid/mail");

describe("/api/contact", () => {
  describe("Rejects DELETE Request", () => {
    const { req, res } = createMocks({
      method: "DELETE",
    });

    beforeAll(() => handler(req, res));

    test("Responds with 405 Status Code", () => {
      expect(res._getStatusCode()).toBe(405);
    });

    test("Responds with JSON Message: 'Method Not Allowed'", () => {
      const { message: actualMessage } = res._getJSONData();
      expect(actualMessage).toBe("Method Not Allowed");
    });
  });
});

export {};

Cypress.Commands.add(
  "createQuestionAndDashboard",
  ({ questionDetails, dashboardDetails, cardDetails } = {}) => {
    cy.createQuestion(questionDetails).then(({ body: { id: questionId } }) => {
      cy.createDashboard(dashboardDetails).then(
        ({ body: { id: dashboardId } }) => {
          cy.request("PUT", `/api/dashboard/${dashboardId}`, {
            dashcards: [
              {
                id: -1,
                card_id: questionId,
                // Add sane defaults for the dashboard card size
                row: 0,
                col: 0,
                size_x: 11,
                size_y: 6,
                ...cardDetails,
              },
            ],
          }).then(response => ({
            ...response,
            body: response.body.dashcards[0],
            questionId,
          }));
        },
      );
    });
  },
);

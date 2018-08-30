export const prepareUserName = (firstName, lastName) => `Mr./Ms. ${firstName} ${lastName || ''}`.trim();

export default {
  prepareUserName,
};


const ErrorComponent = ({ code, message }) => {
  let displayMessage;

  switch (code) {
    case 'apiKeyDisabled':
      displayMessage = 'Your API key has been disabled.';
      break;
    case 'apiKeyExhausted':
      displayMessage = 'Your API key has no more requests available.';
      break;
    case 'apiKeyInvalid':
      displayMessage = 'Your API key is invalid. Please check it and try again.';
      break;
    case 'apiKeyMissing':
      displayMessage = 'Your API key is missing from the request.';
      break;
    case 'parameterInvalid':
      displayMessage = 'You\'ve included an invalid parameter in your request.';
      break;
    case 'parametersMissing':
      displayMessage = 'Required parameters are missing from the request.';
      break;
    case 'rateLimited':
      displayMessage = 'You have been rate limited. Please try again later.';
      break;
    case 'sourcesTooMany':
      displayMessage = 'You have requested too many sources in a single request.';
      break;
    case 'sourceDoesNotExist':
      displayMessage = 'The requested source does not exist.';
      break;
    case 'unexpectedError':
      displayMessage = 'An unexpected error occurred. Please try again later.';
      break;
    default:
      displayMessage = message || 'An unknown error occurred.';
      break;
  }

  return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
      <span className="font-medium">{displayMessage}</span>
    </div>
  );
};

export default ErrorComponent;

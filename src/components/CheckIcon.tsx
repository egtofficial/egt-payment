import { faCheck } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CheckIcon = () => (
  <div className="flex-shrink-0">
    <FontAwesomeIcon
      icon={faCheck}
      size="lg"
      className="h-6 w-6 text-green-500"
    />
  </div>
);

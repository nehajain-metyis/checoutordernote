import {
  reactExtension,
  Text,
  useNote
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.thank-you.cart-line-list.render-after',
  () => <Extension />,
);

function Extension() {
  const ordernote = useNote();

  // If Note Available
  if (ordernote) {
    return (
      <Text>Note : {ordernote}</Text>
    );
  }

  // If Note Not Available
  return null;
}
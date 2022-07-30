import { ref } from 'vue';

export function useThrottlingRequest() {
  const throttlingRequestId = ref(0);
  const TIMEOUT_REQUEST = 600;

  function throttleRequest(request: CallableFunction) {
    clearTimeout(throttlingRequestId.value);
    throttlingRequestId.value = setTimeout(request, TIMEOUT_REQUEST);
  }
  return { throttleRequest };
}

export default useThrottlingRequest;

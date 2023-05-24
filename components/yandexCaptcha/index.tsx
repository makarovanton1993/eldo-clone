import React, { useCallback, useState } from 'react'
import { InvisibleSmartCaptcha, SmartCaptcha } from '@yandex/smart-captcha';
const YandexCaptha = () => {
    const [token, setToken] = useState('');

    return <SmartCaptcha sitekey="<ключ_клиента>" onSuccess={setToken} />;
  
}

export default YandexCaptha
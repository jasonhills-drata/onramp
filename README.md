# Leen OnRamp

OnRamp is Leen's embeddable connection onboarding component. By integrating OnRamp into your workflow, you enable your users to effortlessly create new connections with all of the vendors supported by Leen. 

## Usage

```js
import React, { useState } from "react";
import { LeenOnRamp, LeenOnRampResponse } from "@leendev/onramp";

interface LeenOnRampDemoProps {
  connectionInviteToken: string;
}

const LeenOnRampDemo: React.FC<LeenOnRampDemoProps> = ({ connectionInviteToken }) => {
    // connection creation/ update response
    const [onRampResponse, setLeenOnRampResponse] = useState<LeenOnRampResponse | undefined>(undefined);

    // control opening and closing of modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <div>
        <button onClick={() => setIsModalOpen(true)}>
        Open Leen OnRamp
        </button>
        {isModalOpen && (
            <LeenOnRamp
                token={connectionInviteToken}
                setLeenOnRampResponse={setLeenOnRampResponse}
                setShowLeenOnRamp={setIsModalOpen}
            />
        )}
    </div>
    );
}

export default LeenOnRampDemo;
```

## Support
Currently, Leen OnRamp only supports all versions of React. If you would like support for other JS runtimes, please reach out to support@leen.dev



declare global {
  interface Window {
    renderLeenOnRamp: (props: LeenOnRampProps) => void;
  }
}

export interface LeenOnRampProps {
  token: string;
  setLeenOnRampResponse: (
    leenOnRampResponse: LeenOnRampResponse | undefined,
  ) => void;
  setShowLeenOnRamp: (value: boolean) => void;
  primaryColor?: string;
  logoUrl?: string;
  docsUrlOverrides?: DocsUrlMapping;
  bundleVersion?: string = "latest";
}

export interface DocsUrlMapping {
  [vendor: string]: string;
}

export interface LeenOnRampResponse {
  data: ConnectionResponse;
  httpStatus: number;
  message: string;
}

export interface ConnectionResponse {
  id: string;
  vendor: string;
  refresh_interval_secs: number;
  timeout_secs: number;
  organization_id: string;
  is_active: boolean;
  oauth2_authorize_url?: string;
  identifier: string;
}

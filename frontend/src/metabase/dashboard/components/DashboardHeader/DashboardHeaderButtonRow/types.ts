import type { ComponentType } from "react";

import type { DASHBOARD_ACTION } from "metabase/dashboard/components/DashboardHeader/DashboardHeaderButtonRow/action-buttons";
import type {
  DashboardFullscreenControls,
  DashboardRefreshPeriodControls,
  EmbedNightModeControls,
} from "metabase/dashboard/types";
import type { Collection, Dashboard } from "metabase-types/api";

export type DashboardActionKey = keyof typeof DASHBOARD_ACTION;

export type DashboardHeaderButtonRowProps = {
  collection?: Collection;
  isPublic?: boolean;
  isAnalyticsDashboard?: boolean;
} & DashboardRefreshPeriodControls &
  DashboardFullscreenControls &
  EmbedNightModeControls;

export type HeaderButtonProps = {
  isEditing: boolean;
  canEdit: boolean;
  hasModelActionsEnabled: boolean;
  dashboard: Dashboard;
  canManageSubscriptions: boolean;
  formInput: any;
  isAdmin: boolean;
} & DashboardHeaderButtonRowProps;

export type DashboardActionButton = {
  component: ComponentType<HeaderButtonProps>;
  enabled: (props: HeaderButtonProps) => boolean;
};

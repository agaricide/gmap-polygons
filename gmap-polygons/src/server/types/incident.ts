interface Incident {
  incident_number: string;
  division: string;
  nature_of_call: string;
  priority: number;
  date_time: string;
  unit_number: string;
  block: string;
  location: string;
  beat: number;
  reporting_area: number;
  status: string;
}

const toIncident = (data: any): Incident => {
  const incident: Incident = { ...data };
  incident.priority = parseInt(data.priority);
  incident.beat = parseInt(data.beat);
  incident.reporting_area = parseInt(data.reporting_area);
  return incident;
};

export { Incident, toIncident };

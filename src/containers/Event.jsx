import React from "react";
import { getEventById } from "../api";
import { Loader } from "semantic-ui-react";
import Event from "../components/Event";
import useDocumentTitle from "../hooks/useDocumentTitle";
import getDateTime from "../utils/getDateTime";

const EventContainer = ({ id, query }) => {
  const [event, setEvent] = React.useState();
  useDocumentTitle(event ? `${event.name} - ${getDateTime(event.date)}` : 'Loading...');

  React.useEffect(() => {
    try {
      (async () => {
        const eventData = await getEventById(id);
        setEvent(eventData);
      })();
    } catch (e) {
      // log error and display message
    }
  }, [id]);

  return event ? (
    <Event
      id={id}
      title={event.name}
      date={event.date}
      description={event.description}
      scPageUrl={event.scPageUrl}
      videoUrl={event.videoUrl}
      minutes={event.minutes}
      transcript={event.transcript}
      votes={event.votes}
      query={query}
    />
  ) : <Loader active/>;
};

export default EventContainer;

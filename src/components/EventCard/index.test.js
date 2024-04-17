import React from 'react';
import { render, screen } from "@testing-library/react";
import EventCard from "./index";

describe("When a event card is created", () => {
  it("an image is display with alt value", () => {
    render(<EventCard imageSrc="http://src-image" imageAlt="image-alt-text" date={new Date("2022-04-01")} 
    title="test event"
    
    label="test label"
    />);
    const imageElement = screen.getByTestId("card-image-testid");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });
  it("a title, a label and a month are displayed", () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date("2022-04-01")}
      />
    );
    const titleElement = screen.getByText(/test event/);
    const monthElement = screen.getByText(/avril/);
    const labelElement = screen.getByText(/test label/);
    expect(titleElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(monthElement).toBeInTheDocument();
  });
  describe("with small props", () => {
    it("a modifier small is added", () => {
      render(
        <EventCard
          imageSrc="http://src-image"
          imageAlt="image-alt-text"
          title="test event"
          label="test label"
          date={new Date("2022-04-01")}
          small
        />
      );
      const cardElement = screen.getByTestId("card-testid");
      expect(cardElement.className.includes("EventCard--small")).toEqual(true);
    });
  });
});



describe('EventCard', () => {
  test('should render the most recent event when small is true', () => {
    const event = {
      id: 3,
      title: 'Event 3',
      type: 'Type 1',
      date: '2024-04-07',
      cover: 'image3.jpg',
    };

    const { getByText } = render(<EventCard small {...event} />);
    
    expect(getByText('Event 3')).toBeInTheDocument();
    // Ajoutez d'autres assertions si nécessaire pour le rendu de la carte d'événement avec small=true
  });

  // Écrivez d'autres tests pour d'autres cas de rendu de la carte d'événement si nécessaire
});
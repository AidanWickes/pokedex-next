import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { getAllPokemon } from "@/lib/api";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      name: "Pokemon",
      control: { type: "select" },
      options: Object.keys(getAllPokemon()),
    },
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const standard: Story = {
  args: {
    id: 1,
    name: "Bulbasaur",
    image: {
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      alt: 'Bulbasaur'
    },
    types: ['grass', 'poison']
  }
};

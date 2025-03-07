/**
 * @file FeaturesSection.jsx
 * @description This component represents the features section of the landing page.
 * It highlights the key benefits of the application, providing an overview of its
 * speed, customization, and collaboration capabilities.
 *
 * @component
 * @returns {JSX.Element} The features section layout.
 */

import React from 'react';
import FeatureCard from '../cards/FeatureCard';

/**
 * FeaturesSection Component
 * 
 * This component displays a section highlighting the core features of the application.
 * It dynamically renders multiple `FeatureCard` components based on the `features` array.
 *
 * Features included:
 * - **Speed & Efficiency**: Optimized UI for task management with intelligent integrations.
 * - **Total Customization**: Adaptable interface and workflows tailored to user needs.
 * - **Collaborative Work**: Shared project management with task assignment and built-in chat.
 *
 * @returns {JSX.Element} The features section containing feature cards.
 */
const FeaturesSection = () => {
  const features = [
    {
      icon: 'bi-lightning-charge',
      title: 'Velocidad y Eficiencia',
      description: 'Interfaz optimizada para gestión rápida de tareas con integraciones inteligentes'
    },
    {
      icon: 'bi-palette-fill',
      title: 'Personalización Total',
      description: 'Adapta la interfaz y flujos de trabajo a tus necesidades específicas'
    },
    {
      icon: 'bi-people-fill',
      title: 'Trabajo Colaborativo',
      description: 'Gestión compartida de proyectos con asignación de tareas y chat integrado'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="row g-5">
          {/* Rendering feature cards dynamically */}
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

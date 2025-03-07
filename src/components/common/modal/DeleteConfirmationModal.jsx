/**
 * @file DeleteConfirmationModal.jsx
 * @description This component represents a confirmation modal for deleting a task.
 * It prompts the user for confirmation before proceeding with the deletion.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.show - Determines if the modal is visible.
 * @param {string} props.title - The title of the task to be deleted.
 * @param {Function} props.onHide - Function to close the modal without deleting.
 * @param {Function} props.onConfirm - Function to confirm task deletion.
 * @param {boolean} props.deleting - Indicates if the deletion process is in progress.
 * @returns {JSX.Element} The delete confirmation modal component.
 */

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Trash3 } from 'react-bootstrap-icons';

/**
 * DeleteConfirmationModal Component
 * 
 * This component renders a confirmation modal with:
 * - **A title** displaying the task name for better context.
 * - **A cancel button** to close the modal without deleting.
 * - **A delete button** that triggers the deletion process.
 * - **A loading state** (`spinner-border`) while deletion is in progress.
 * - **A Bootstrap modal layout** for an intuitive UI.
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.show - Determines if the modal is visible.
 * @param {string} props.title - The title of the task to be deleted.
 * @param {Function} props.onHide - Function to close the modal without deleting.
 * @param {Function} props.onConfirm - Function to confirm task deletion.
 * @param {boolean} props.deleting - Indicates if the deletion process is in progress.
 * @returns {JSX.Element} The delete confirmation modal component.
 */
const DeleteConfirmationModal = ({ 
  show, 
  title, 
  onHide, 
  onConfirm, 
  deleting 
}) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton className="border-0 pb-0">
      <Modal.Title>Confirmar Eliminación</Modal.Title>
    </Modal.Header>
    <Modal.Body className="py-4">
      Estas seguro de que quieres eliminar "{title}"?
    </Modal.Body>
    <Modal.Footer className="border-0">
      {/* Cancel button */}
      <Button variant="light" onClick={onHide}>
        Cancelar
      </Button>
      {/* Delete button with loading state */}
      <Button 
        variant="danger" 
        onClick={onConfirm} 
        disabled={deleting}
        className="d-flex align-items-center"
      >
        {deleting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" />
            Eliminando...
          </>
        ) : (
          <>
            <Trash3 className="me-2" size={16} />
            Eliminar
          </>
        )}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeleteConfirmationModal;
